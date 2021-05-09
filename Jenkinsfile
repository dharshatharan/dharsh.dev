pipeline {
    agent any

    stage('Initialize'){
        def dockerHome = tool 'my_docker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }
    // agent {
    //     docker {
    //         image 'node:16-alpine' 
    //         args '-p 3000:3000' 
    //     }
    // }

    // environment {
    //     CI = 'true' 
    // }

    // tools {
    //     nodejs "nodejs"
    // }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
