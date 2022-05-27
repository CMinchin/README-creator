// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} [lisence: ${data.license}](https://img.shields.io/github/license/${data.link.split("github.com")[1]})

  ##Description

  ${data.Description}

  ## Table of contents
  
  [Installation](#Installation)
  
  [Usage](#Usage)
  
  [Contributing](#Contributing)
  
  [Tests](#Tests)
  
  [Questions](#Questions)
  
  [License](#License)
  
  [Installation]#Installation

  ${data.Installation}
  
  ##Usage

  ${data.Usage}
  
  ##Contributing

  ${data.Contributing}
  
  ##Tests

  ${data.Tests}
  
  ##Questions

  ${data.Questions}
  
  ##License

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
