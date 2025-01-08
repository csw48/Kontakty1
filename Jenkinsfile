pipeline {
    agent any

    environment {
        COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/csw48/PASS-SK-Contacts.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo 'Starting Docker Compose build...'
                    sh 'docker-compose -f ${COMPOSE_FILE} build'
                    echo 'Docker Compose build finished.'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    echo 'Running tests...'
                    sh 'docker-compose -f ${COMPOSE_FILE} run app npm test'
                    echo 'Tests completed.'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deploying application...'
                    sh 'docker-compose -f ${COMPOSE_FILE} up -d'
                    echo 'Deployment finished.'
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    echo 'Cleaning up Docker Compose...'
                    sh 'docker-compose -f ${COMPOSE_FILE} down'
                    echo 'Cleanup finished.'
                }
            }
        }
    }

    post {
        always {
            echo 'Always running cleanup...'
            sh 'docker-compose -f ${COMPOSE_FILE} down'
        }
    }
}
