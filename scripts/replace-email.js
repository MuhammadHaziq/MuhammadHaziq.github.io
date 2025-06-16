const fs = require('fs');
const path = require('path');

// Print environment variable information
console.log('=== Environment Variable Debug Info ===');
console.log(`CONTACT_EMAIL environment variable: "${process.env.CONTACT_EMAIL}"`);
console.log(`CONTACT_EMAIL type: ${typeof process.env.CONTACT_EMAIL}`);
console.log(`CONTACT_EMAIL is undefined: ${process.env.CONTACT_EMAIL === undefined}`);
console.log(`CONTACT_EMAIL is null: ${process.env.CONTACT_EMAIL === null}`);
console.log(`CONTACT_EMAIL is empty string: ${process.env.CONTACT_EMAIL === ''}`);

// Get email from environment variable or use default
const contactEmail = process.env.CONTACT_EMAIL;

console.log(`\n=== Email Replacement Info ===`);
console.log(`Final email to use: "${contactEmail}"`);
console.log(`Using fallback email: ${!process.env.CONTACT_EMAIL}`);

// Replace in README.md
const readmePath = path.join(__dirname, '..', 'README.md');
if (fs.existsSync(readmePath)) {
  let readmeContent = fs.readFileSync(readmePath, 'utf8');
  const originalContent = readmeContent;
  
  // Count placeholders before replacement
  const placeholderCount = (readmeContent.match(/DYNAMIC_EMAIL_PLACEHOLDER/g) || []).length;
  console.log(`\n=== README.md Processing ===`);
  console.log(`Found ${placeholderCount} placeholder(s) in README.md`);
  
  readmeContent = readmeContent.replace(/DYNAMIC_EMAIL_PLACEHOLDER/g, contactEmail);
  
  if (originalContent !== readmeContent) {
    fs.writeFileSync(readmePath, readmeContent);
    console.log('✅ README.md email placeholders replaced successfully');
    
    // Verify replacement - only if contactEmail is valid
    if (contactEmail && typeof contactEmail === 'string') {
      const updatedContent = fs.readFileSync(readmePath, 'utf8');
      const remainingPlaceholders = (updatedContent.match(/DYNAMIC_EMAIL_PLACEHOLDER/g) || []).length;
      const emailOccurrences = (updatedContent.match(new RegExp(contactEmail.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
      
      console.log(`Remaining placeholders: ${remainingPlaceholders}`);
      console.log(`Email occurrences after replacement: ${emailOccurrences}`);
    } else {
      console.log('⚠️  Cannot verify replacement - invalid email value');
    }
  } else {
    console.log('ℹ️  No email placeholders found in README.md');
  }
} else {
  console.log('❌ README.md not found');
}

console.log('\n=== Script Completed ==='); 