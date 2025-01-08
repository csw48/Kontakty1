pipeline {
    agent any

    environment {
        // Nastavenie Docker Compose príkazu ako environment variable
        COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Checkout') {
            steps {
                // Stiahne kód z GitHub repozitára
                git branch: 'master', url: 'https://github.com/csw48/PASS-SK-Contacts.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Buildne Docker image pre Node.js aplikáciu
                    sh 'docker-compose -f ${COMPOSE_FILE} build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Spustí testy (ak ich máš definované v package.json)
                    sh 'docker-compose -f ${COMPOSE_FILE} run app npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Nasadí aplikáciu spustením kontajnera
                    sh 'docker-compose -f ${COMPOSE_FILE} up -d'
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    // Cleanup a zruší všetky zastavené kontajnery, aby sa uvoľnili zdroje
                    sh 'docker-compose -f ${COMPOSE_FILE} down'
                }
            }
        }
    }

    post {
        always {
            // Cleanup aj v prípade zlyhania
            sh 'docker-compose -f ${COMPOSE_FILE} down'
        }
    }
}
