pipeline {
    agent any

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
                    sh 'docker-compose build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Spustí testy (ak ich máš definované v package.json)
                    sh 'docker-compose run app npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Nasadí aplikáciu spustením kontajnera
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}
