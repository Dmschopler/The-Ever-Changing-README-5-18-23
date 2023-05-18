// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license !== 'Unlicensed') {
    return `[License](https://img.shields.io/static/v1?lavel=LICENSE&message=${license}&color=brightgreen)`
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license !== 'Unlicensed') {
    return `[License Page](https://opensource.org/license/${license.toLowerCase()})`
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license !== 'Unlicensed') {
    return `## License Distributed under the ${license} License. See ${renderLicenseLink(license)} for more information.`
  }
}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = generateMarkdown;
