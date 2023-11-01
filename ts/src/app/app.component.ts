import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { add } from 'cypress/types/lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showAnswer: boolean = false;
  showAnswer2: boolean = false;
  toggleAnswer() {
    this.showAnswer = !this.showAnswer;
  }

  toggleAnswer2() {
    this.showAnswer2 = !this.showAnswer2;
  }

  @ViewChild('meuFormulario', { static: false }) meuFormularioRef!: ElementRef;
  title = 'DevChuva';

  ngAfterViewInit() {
    this.lerMaisOuMenos();
    this.setupCreateTopics();
    this.setupSendButton();
    this.setupCreateTopicsButton2();
    this.setupCreateFeedbackSend();
  }
  private lerMaisOuMenos() {
    const verMais = document.getElementById('verMais');
    const mais = document.getElementById('mais');

    if (verMais && mais) {
      verMais.addEventListener('click', () => {
        if (mais.style.display === 'none') {
          mais.style.display = 'block';
          verMais.textContent = 'ver menos';
        } else {
          mais.style.display = 'none';
          verMais.textContent = 'ver mais';
        }
      });
    }}
  private setupCreateTopics() {
    const topicos = document.querySelectorAll('.btn-create-topic');
    for (let i = 0; i < topicos.length; i++) {
      topicos[i].addEventListener('click', () => {
        const topicsActive = document.querySelector('.create-topics-active');

        if (topicsActive) {
          topicsActive.classList.toggle('create-topics-desactive');

          if (topicsActive.classList.contains('create-topics-desactive')) {
       
            if (this.meuFormularioRef) {
              this.meuFormularioRef.nativeElement.style.display = 'block';
            }
          } else {
      
            if (this.meuFormularioRef) {
              this.meuFormularioRef.nativeElement.style.display = 'none';
            }
          }
        }
      });
    }
  }

  private setupSendButton() {
    const sendButton = document.getElementById('btn-send');
    if (sendButton) {
      sendButton.addEventListener('click', () => {
        // Esconda o formulário
        if (this.meuFormularioRef) {
          const meuFormulario = this.meuFormularioRef.nativeElement as HTMLElement;
          meuFormulario.style.display = 'none';
        }
        const topicosCriados = document.querySelectorAll('.topicoEnviado');
        topicosCriados.forEach((topico) => {
          const topicoElement = topico as HTMLElement;
          topicoElement.style.display = 'block';
        });
      });
    }
  }

  private setupCreateTopicsButton2() {
    const createTopicButton2 = document.getElementById('btn-create-topic2');
    if (createTopicButton2) {
      createTopicButton2.addEventListener('click', () => {
        const topicsActive = document.querySelector('.create-topics-active');
        const topicoEnviado = document.querySelector('.topicoEnviado');
    
        if (topicsActive && topicoEnviado) {
          if (topicoEnviado instanceof HTMLElement) {
            topicoEnviado.style.display = 'none';
          }
    
          if (this.meuFormularioRef) {
            this.meuFormularioRef.nativeElement.style.display = 'block';
          }
        }
      });
    }
  }
  
  private setupCreateFeedbackSend() {
    const enviado = document.getElementById('btn-send');
    if (enviado) {
      enviado.addEventListener('click', () => {
        const feedbackElement = document.querySelector('.aguardandoFeedbackDosAutores');
        if (feedbackElement) {
          feedbackElement.classList.remove('desactive');
        }
      });
    }
  }
}