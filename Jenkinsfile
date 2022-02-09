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
        echo 'Here must build'
        sh ' docker-compose -f docker-compose.yml up -d'
      }
      }
      stage('Test app'){
            steps {
              echo 'Here must test'
              sh ' docker-compose -f docker-compose.yml down'
            }
            }
    stage('Deploy on Release branch'){
      steps {
        echo 'Here must deploy'
        sh 'git checkout -b release'
        sh 'git merge develop'
        sh 'git push origin release'
      }

    }
  }
}