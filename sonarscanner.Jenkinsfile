pipeline {
    agent any
    stages {
        stage('Scan') {
            steps {
                withSonarQubeEnv('atgm') {
                        sh 'sonar-scanner'
                }
            }
        }
    }
}
