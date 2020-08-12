<<<<<<< HEAD
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 12.x', configId: '<config-file-provider-id>') {
                    sh 'npm config ls'
                }
=======
Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker { image 'node:12.8.3' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
>>>>>>> 0d9bfb14bf646cf77d3ad762bf97b970b1dd2268
            }
        }
    }
}
