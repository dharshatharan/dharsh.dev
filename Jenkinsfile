pipeline {
    agent any
    // agent {
    //     docker {
    //         image 'node:6-alpine'
    //         args '-p 5000:3000 -p 5000:5000'
    //     }
    // }

    // environment {
    //     CI = 'true' 
    // }

    tools {
        nodejs "nodejs"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                // sh 'npm install'
                // sh 'npm run build'
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
