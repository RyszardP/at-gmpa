pipeline {
    agent any
    stages {
        stage('Scan') {
            steps {
                withSonarQubeEnv(installationName: 'atgm') {
                        sh 'sonar-scanner'
                }
            }
        }
    }
}
