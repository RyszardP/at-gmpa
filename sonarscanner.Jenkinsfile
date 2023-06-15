pipeline {
    agent any
    stages {
        stage('SCM') {
            steps {
                git url: 'https://github.com/RyszardP/at-gmpa.git'
            }
        }
        stage('Scan') {
            steps {
                withSonarQubeEnv('atgm') {
                        sh 'sonar-scanner'
                }
            }
        }
    }
}
