$commitMessage = Read-Host "Enter your commit message"

git add .

git commit -m "$commitMessage"

git push origin master

npm run deploy
