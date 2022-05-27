// returns a license badge based on which license is passed in
function renderLicenseBadge(license, link) {
  return `![lisence: ${license}](https://img.shields.io/github/license/${link.split("github.com")[1]})`
}

// returns the license link
function renderLicenseLink(license) {}

// returns the license section of README
function renderLicenseSection(license) {
  return `This Project uses the ${license} license and the full license can be found [here](./LICENSE)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license, data.link)}

  ## Description

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
  
  ## Usage

  ${data.Usage}
  
  ## Contributing

  ${data.Contributing}
  
  ## Tests

  ${data.Tests}
  
  ## Questions

  ${data.Questions}
  
  ## License

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
