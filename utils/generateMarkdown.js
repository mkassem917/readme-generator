//function to generate markdown for README

function generateMarkdown(data) {
  return `
  
  # GitHub
  
  # Project 
  ${data.project}

  ## Content Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}







`;
}

module.exports = generateMarkdown;
