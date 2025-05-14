
/**
 * WordPress Export Utility
 * This script generates a static HTML/CSS version of the landing page
 * that can be copied into WordPress or imported into Elementor.
 */

// Function to extract all styles from document
const extractStyles = () => {
  const styles: string[] = [];
  const styleElements = document.querySelectorAll('style, link[rel="stylesheet"]');
  
  styleElements.forEach((style) => {
    if (style.tagName === 'STYLE') {
      styles.push(style.innerHTML);
    } else if (style.tagName === 'LINK') {
      // For external stylesheets, we'd need to fetch them
      // This is a simplified version
      console.log('External stylesheet:', (style as HTMLLinkElement).href);
    }
  });
  
  return styles.join('\n');
};

// Function to get clean HTML (without script tags)
const extractHtml = () => {
  const contentElement = document.querySelector('#root');
  if (!contentElement) return '';
  
  // Deep clone to avoid modifying the actual DOM
  const clone = contentElement.cloneNode(true) as HTMLElement;
  
  // Remove all script tags from the clone
  const scripts = clone.querySelectorAll('script');
  scripts.forEach(script => script.remove());
  
  return clone.innerHTML;
};

// Extract a single section by its component name
const extractSection = (sectionName: string) => {
  // Find all section elements
  const sections = document.querySelectorAll('section');
  let sectionHtml = '';
  
  // Look for a section that might correspond to the requested component
  // This is a simple heuristic based on class names or content
  for (const section of sections) {
    if (
      // Check if section contains text that matches the component name
      section.textContent?.toLowerCase().includes(sectionName.toLowerCase()) ||
      // Or check for specific visual markers in each section
      (sectionName === 'Hero' && section.querySelector('.heading-xl')) ||
      (sectionName === 'Problem' && section.querySelector('.text-3xl') && section.textContent?.includes('cansado')) ||
      (sectionName === 'Solution' && section.textContent?.includes('Método da Gaveta')) ||
      (sectionName === 'Transformation' && section.textContent?.includes('O que muda')) ||
      (sectionName === 'Audience' && (section.textContent?.includes('É PRA VOCÊ') || section.textContent?.includes('NÃO É PRA VOCÊ'))) ||
      (sectionName === 'Authority' && section.textContent?.includes('Quem criou')) ||
      (sectionName === 'Offer' && section.textContent?.includes('Tudo isso por apenas')) ||
      (sectionName === 'Faq' && section.textContent?.includes('Perguntas Frequentes')) ||
      (sectionName === 'FinalCta' && section.textContent?.includes('Última chamada'))
    ) {
      sectionHtml = section.outerHTML;
      break;
    }
  }
  
  return sectionHtml;
};

// Create the WordPress export for a full page
export const generateWordPressExport = () => {
  const styles = extractStyles();
  const html = extractHtml();
  
  const exportedCode = `
<!DOCTYPE html>
<html>
<head>
  <style>
    ${styles}
  </style>
</head>
<body>
  <div class="wordpress-content">
    ${html}
  </div>
</body>
</html>
  `.trim();
  
  // Create a downloadable file
  const blob = new Blob([exportedCode], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  
  // Create download link
  const a = document.createElement('a');
  a.href = url;
  a.download = 'metodo-da-gaveta-wordpress.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  return 'Exportação para WordPress concluída! O arquivo HTML foi baixado.';
};

// Export a specific section by name
export const exportSection = (sectionName: string) => {
  const styles = extractStyles();
  const sectionHtml = extractSection(sectionName);
  
  if (!sectionHtml) {
    console.error(`Não foi possível encontrar a seção: ${sectionName}`);
    return `Erro: Seção '${sectionName}' não encontrada.`;
  }
  
  const exportedCode = `
<!DOCTYPE html>
<html>
<head>
  <style>
    ${styles}
  </style>
</head>
<body>
  <div class="wordpress-content">
    ${sectionHtml}
  </div>
</body>
</html>
  `.trim();
  
  // Create a downloadable file
  const blob = new Blob([exportedCode], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  
  // Create download link
  const a = document.createElement('a');
  a.href = url;
  a.download = `metodo-da-gaveta-${sectionName.toLowerCase()}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  return `Exportação da seção ${sectionName} concluída! O arquivo HTML foi baixado.`;
};
