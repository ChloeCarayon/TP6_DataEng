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
              dir('front-end') {
                 sh 'npm test -- --watchAll=false --verbose'
              }
              sh ' docker-compose -f docker-compose.yml down'
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