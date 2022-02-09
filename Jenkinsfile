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
    stage('Docker-compose Up'){
      steps {
        sh ' docker-compose -f docker-compose.yml up -d'
        echo 'Here must build'
        sh ' docker-compose -f docker-compose.yml down'
      }
      }
    stage('Deploy on Release branch'){
      steps {
        echo 'Here must deploy'
      }

    }
  }
}