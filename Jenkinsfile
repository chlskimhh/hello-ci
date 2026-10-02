pipeline {
agent any
 
tools {
nodejs 'node20'
}
 
environment {
SELENIUM_REMOTE_URL = 'http://selenium:4444/wd/hub'
APP_URL = 'http://localhost:3000'
}
 
stages {
stage('Install Dependencies') {
steps {
sh 'npm ci'
}
}
 
stage('Start Application') {
steps {
sh 'npm start > app.log 2>&1 &'
sh 'sleep 10'
}
}
 
stage('UI Tests') {
steps {
sh 'npm test'
}
}
}
}
