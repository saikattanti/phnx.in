const { execSync } = require('child_process');

// Get Git commit hash (fallback if not available)
const getGitHash = () => {
    try {
        return execSync('git rev-parse --short HEAD').toString().trim();
    } catch {
        return 'no-git-info';
    }
};

// Get Git repository owner name (fallback if not available)
const getRepoOwner = () => {
    try {
        return execSync('git config user.name').toString().trim();
    } catch {
        return 'Unknown Owner';
    }
};

let commitInfo = {
    hash: getGitHash(),
    version: process.env.npm_package_version || '0.1.0',
    owner: getRepoOwner()
};

console.log(`
★════════════════════════════════════★
       🔥 P H O E N I X  2 5 🔥
       Welcome to the Arena
★════════════════════════════════════★

👤 Repo Owner: ${commitInfo.owner}
🚀 Current Version Tag: v${commitInfo.version}
🔗 Current Commit Version: ${commitInfo.hash}

⌛ Please wait until the URL appears here...
★════════════════════════════════════★
`);
