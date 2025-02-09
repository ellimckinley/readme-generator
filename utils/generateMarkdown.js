// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = {
    'MIT':'![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    'Boost Software License 1.0': '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)',
    'GNU GPLv2': '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)',
    'GNU GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'ISC License': '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)',
    'CC0-1.0': '![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)',
    'CC-BY-4.0': '![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)',
    'CC-BY-SA-4.0': '![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)',
  };

  if (license && licenseBadge[license]) {
     //  block of code to be executed if condition1 is true
    return licenseBadge[license]
  } else {
    return "";
}}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    'MIT':'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'Boost Software License 1.0': 'https://www.boost.org/LICENSE_1_0.txt',
    'GNU GPLv2': 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html',
    'GNU GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'ISC License': '(https://opensource.org/licenses/ISC)',
    'CC0-1.0': 'http://creativecommons.org/publicdomain/zero/1.0/',
    'CC-BY-4.0': 'https://creativecommons.org/licenses/by/4.0/',
    'CC-BY-SA-4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
  };

  if (license && licenseLink[license]){
    return licenseLink[license]
  } else {
    return "";
  }}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  
  if (badge && link) {
  return `## License\n\n ${badge}\n\n This project is licensed under the ${license} license. ${link}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.projectTitle}

## Description
${data.description}

## Installation Instructions
${data.installationInst}

## Usage Information
${data.usage}

${licenseSection}

## Contribution Guidelines
${data.contributionGL}

## Test Instructions
${data.testInst}
`;
}

export default generateMarkdown;
