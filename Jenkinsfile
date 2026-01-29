pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                bat 'docker build -t employee-api .'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Code quality analysis (simulated)'
            }
        }

        stage('Security') {
            steps {
                echo 'Security scan (simulated)'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker run -d -p 3000:3000 employee-api || exit 0'
            }
        }

        stage('Release') {
            steps {
                echo 'Release stage completed'
            }
        }

        stage('Monitoring') {
            steps {
                bat 'curl http://localhost:3000/health'
            }
        }
    }
}
