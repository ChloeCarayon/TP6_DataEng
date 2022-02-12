pipeline {
  agent any
  environment {
          ENV = 'prod'
  }
  stages {
    stage('Environment') {
      steps {
        sh 'git --version'
        sh 'docker -v'
        sh 'ls'
      }
    }
    stage('Docker Test and Run'){
      steps {
        echo 'Here must build'
        sh ' docker-compose -f docker-compose.yml up -d '
      }
      }
    stage('Deploy on Release branch'){
      steps {
          echo 'Here must deploy'
          sh 'git remote -v'
          sh 'git fetch origin'
          sh 'git checkout release'
          sh 'git merge release'
        sh 'git push -u origin release'
      }

    }
  }
}