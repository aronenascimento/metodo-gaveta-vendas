
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

// Create the WordPress export
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
