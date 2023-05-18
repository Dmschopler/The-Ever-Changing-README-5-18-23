const renderLicenseBadge = (license) => {
  if (license !== 'Unlicensed') {
    return `[License](https://img.shields.io/static/v1?lavel=LICENSE&message=${license}&color=brightgreen)`
  }
  else {
    return "";
  }
}

const renderLicenseLink = (license) => {
  if (license !== 'Unlicensed') {
    return `[License Page](https://opensource.org/license/${license.toLowerCase()})`
  }
  else {
    return "";
  }
}

const renderLicenseSection = (license) => {
  if (license !== 'Unlicensed') {
    return `## License Distributed under the ${license} License. See ${renderLicenseLink(license)} for more information.`
  }
}

module.exports = generateMarkdown;
