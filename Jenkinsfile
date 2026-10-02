pipeline {
    agent any
 
    tools {
        nodejs 'node20'
    }
 
    triggers {
        pollSCM('H/15 * * * *')
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
sh 'until curl -s http://localhost:3000; do sleep 2; done'
}
}
 
stage('UI Tests') {
steps {
sh 'curl -v http://localhost:3000'
sh 'npm test'
}
}
}
