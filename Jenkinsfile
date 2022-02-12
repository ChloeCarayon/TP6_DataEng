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
    stage('Docker Test'){
      steps {
        sh ''
        echo 'Here must build'
        sh ' docker-compose -f docker-compose-test.yml up -d '
        sh ' docker-compose -f docker-compose-test.yml down'
      }
      }
      stage('Docker in production'){
            steps {
              sh ' docker-compose -f docker-compose.yml up -d '
            }
            }
    stage('Deploy on Release branch'){
      steps {
          echo 'Here must deploy'
          sh 'git checkout release'
          sh 'git merge origin/develop'
          sh 'git commit -am "Updated version"'
          sh 'git push origin release'
      }

    }
  }
}