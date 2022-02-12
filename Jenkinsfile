pipeline {
  agent any
  stages {
    stage('Environment') {
      steps {
        sh 'git --version'
        sh 'git remote -v'
        sh 'docker -v'
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
          sh 'git fetch origin'
          sh 'git checkout release'
          sh 'git merge release'
          withCredentials([string(credentialsId: 'ChloeCarayon', variable: 'token')]) {
                                sh 'git push https://%token%@github.com/ChloeCarayon/TP6_DataEng.git'
                            }
        //sh 'git push -u origin release'
      }

    }
  }
}