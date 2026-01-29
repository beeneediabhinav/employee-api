pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                sh 'docker build -t employee-api .'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
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
                sh 'docker run -d -p 3000:3000 employee-api || true'
            }
        }

        stage('Release') {
            steps {
                echo 'Release stage completed'
            }
        }

        stage('Monitoring') {
            steps {
                sh 'curl http://localhost:3000/health'
            }
        }
    }
}
