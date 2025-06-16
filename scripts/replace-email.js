const fs = require('fs');
const path = require('path');

// Get email from environment variable or use default
const contactEmail = process.env.CONTACT_EMAIL || 'muhammadhaziq341@gmail.com';

console.log(`Replacing email placeholders with: ${contactEmail}`);

// Replace in README.md
const readmePath = path.join(__dirname, '..', 'README.md');
if (fs.existsSync(readmePath)) {
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  const originalContent = readmeContent;
  
  readmeContent = readmeContent.replace(/DYNAMIC_EMAIL_PLACEHOLDER/g, contactEmail);
  
  if (originalContent !== readmeContent) {
    fs.writeFileSync(readmePath, readmeContent);
    console.log('✅ README.md email placeholders replaced successfully');
  } else {
    console.log('ℹ️  No email placeholders found in README.md');
  }
} else {
  console.log('❌ README.md not found');
}

console.log('Email replacement script completed'); 