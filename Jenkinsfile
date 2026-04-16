pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building project...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Checking code quality...'
                sh 'npm audit'
            }
        }

        stage('Security') {
            steps {
                echo 'Running security scan...'
                sh 'npm audit'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t my-app .'
            }
        }

        stage('Release') {
            steps {
                echo 'Release stage...'
                sh 'echo "Release completed"'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring application...'
                sh 'echo "Health check available at /health"'
            }
        }
    }
}