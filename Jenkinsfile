pipeline {
  agent any
  stages {
    stage('Environment') {
      steps {
        sh 'git --version'
        sh 'docker -v'
        sh 'ls'
      }
    }
    stage('Build Docker test'){
      steps {
        //sh 'docker build -t app-jenkins -f Dockerfile --no-cache .'
         echo 'Here must build'
      }
      }
    stage('Deploy'){
      steps {
        echo 'Here must deploy'
      }

    }
  }
}