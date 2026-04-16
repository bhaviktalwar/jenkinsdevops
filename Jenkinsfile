pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building project...'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Checking code quality...'
                bat 'npm audit'
            }
        }

        stage('Security') {
            steps {
                echo 'Running security scan...'
                bat 'npm audit'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t my-app .'
            }
        }

        stage('Release') {
            steps {
                echo 'Release stage...'
                bat 'echo Release completed'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring application...'
                bat 'echo Health check available at /health'
            }
        }
    }
}
