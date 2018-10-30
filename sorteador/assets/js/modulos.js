let videos = new Array();
let modulos = new Array();
const base_url = "https://fast.player.liquidplatform.com/pApiv2/embed/6169876d5ac3a7d26e69d4471ef941b7/"

modulos.push({
    id: '1',
    descricao: 'Teoria da Constituição',
});
modulos.push({
    id: '2',
    descricao: 'Princípios Fundamentais',
});
modulos.push({
    id: '3',
    descricao: 'Direitos Fundamentais',
});
modulos.push({
    id: '4',
    descricao: 'Direitos Sociais. Nacionalidade e Direitos Políticos',
});


videos.push({
    src: base_url + "445e7c58fe159e9334e2aac1f5b1a89e",
    titulo: 'Vídeo 1',
    modulo: '1',
    descricao: 'Conceitos de Constituição.'
});
videos.push({
    src: base_url + "a8dfa7c4ad6c061fa5be694cf99b5153",
    titulo: 'Vídeo 2',
    modulo: '1',
    descricao: 'Classificação das Constituições - Parte I.'
});
videos.push({
    src: base_url + "024c8162b19c0c79cb8b7639b5c8c144",
    titulo: 'Vídeo 3',
    modulo: '1',
    descricao: 'Classificação das Constituições - Parte II.'
});
videos.push({
    src: base_url + "17b272ed1e11f4b7530fcb8afa6683fa",
    titulo: 'Vídeo 4',
    modulo: '1',
    descricao: 'Aplicabilidade das Normas Constitucionais - Parte I.'
});
videos.push({
    src: base_url + "0a8fe013a59e9bf550fbe6ecd2a907b9",
    titulo: 'Vídeo 5',
    modulo: '1',
    descricao: 'Aplicabilidade das Normas Constitucionais - Parte II.'
});
videos.push({
    src: base_url + "4976049523a82fafbc1141df217d1b07",
    titulo: 'Vídeo 6',
    modulo: '1',
    descricao: 'Poder Constituinte Originário - Parte I.'
});
videos.push({
    src: base_url + "20de2685a1cdffc247179bdbf6234fb0",
    titulo: 'Vídeo 7',
    modulo: '1',
    descricao: 'Poder Constituinte Originário - Parte II.'
});
videos.push({
    src: base_url + "06c8f43b515b74a383303a06c503eae5",
    titulo: 'Vídeo 8',
    modulo: '1',
    descricao: 'Poder Constituinte Derivado Reformador.'
});

//MÓDULO 2
videos.push({
    src: base_url + "9c499c016c7477e12c6cd1e00ca83565",
    titulo: 'Vídeo 1',
    modulo: '2',
    descricao: 'Regras x Princípios.'
});
videos.push({
    src: base_url + "3dc60689f206eb018e53cedcaef382d5",
    titulo: 'Vídeo 2',
    modulo: '2',
    descricao: 'Princípios Fundamentais - Parte II.'
});
videos.push({
    src: base_url + "3dc60689f206eb018e53cedcaef382d5",
    titulo: 'Vídeo 3',
    modulo: '2',
    descricao: 'Princípios Fundamentais - Parte III.'
});
videos.push({
    src: base_url + "282d263bc84d82c5abbaf3ac3090bac5",
    titulo: 'Vídeo 4',
    modulo: '2',
    descricao: 'Princípios Fundamentais - Parte IV.'
});

//MÓDULO 3
videos.push({
    src: base_url + "67c1b4564aaf2bd2a4e2efec2d8349f5",
    titulo: 'Vídeo 1',
    modulo: '3',
    descricao: 'Teoria dos Direitos Fundamentais - Parte I.'
});
videos.push({
    src: base_url + "d9b113a6d14863a814a4047f82e52ef5",
    titulo: 'Vídeo 2',
    modulo: '3',
    descricao: 'Teoria dos Direitos Fundamentais - Parte II.'
});
videos.push({
    src: base_url + "affdd9555f4ed5e372ee5d6175e4c26c",
    titulo: 'Vídeo 3',
    modulo: '3',
    descricao: 'Teoria dos Direitos Fundamentais - Parte III.'
});
videos.push({
    src: base_url + "ad4f4eea2b4670d399a20d91c147ae3c",
    titulo: 'Vídeo 4',
    modulo: '3',
    descricao: 'Direito à Vida.'
});
videos.push({
    src: base_url + "70e703dfb8c5592d2d4660de3cadd8a1",
    titulo: 'Vídeo 5',
    modulo: '3',
    descricao: 'Direito à Igualdade.'
});
videos.push({
    src: base_url + "9be86e0e79b0793fc9d594a014dc9d64",
    titulo: 'Vídeo 6',
    modulo: '3',
    descricao: 'Direito à Propriedade.'
});
videos.push({
    src: base_url + "ad8ffcbe9b09cb82dcc0b2e088e63369",
    titulo: 'Vídeo 7',
    modulo: '3',
    descricao: 'Direito à Segurança Jurídica.'
});
videos.push({
    src: base_url + "bd88edf88abb8e52bd9a3ac3b58316b5",
    titulo: 'Vídeo 8',
    modulo: '3',
    descricao: 'Direito à Liberdade.'
});
videos.push({
    src: base_url + "8efe1b78f961c9f79901b8d2040e7d48",
    titulo: 'Vídeo 9',
    modulo: '3',
    descricao: 'Garantias Processuais Gerais.'
});
videos.push({
    src: base_url + "a8c5a73055c2019a8305848cbf0db71b",
    titulo: 'Vídeo 10',
    modulo: '3',
    descricao: 'Garantias Penais.'
});
videos.push({
    src: base_url + "a26a91ecf5c70007bf32037eb0a36284",
    titulo: 'Vídeo 11',
    modulo: '3',
    descricao: 'Intimidade e Privacidade.'
});
videos.push({
    src: base_url + "ca824aadd8266ee4c1a6d3746d634b1f",
    titulo: 'Vídeo 12',
    modulo: '3',
    descricao: 'Remédios Constitucionais - Parte I.'
});
videos.push({
    src: base_url + "9b86a1a3e8b7d0eed0b647c5f4542026",
    titulo: 'Vídeo 13',
    modulo: '3',
    descricao: 'Remédios Constitucionais - Parte II.'
});
videos.push({
    src: base_url + "8f12dbd4f26c4fc2cd4a69423fa6a4f5",
    titulo: 'Vídeo 14',
    modulo: '3',
    descricao: 'Remédios Constitucionais - Parte III.'
});
videos.push({
    src: base_url + "d8e966ced9ad4396feb1a74a6a2e7a2d",
    titulo: 'Vídeo 15',
    modulo: '3',
    descricao: 'Remédios Constitucionais - Parte IV.'
});

function getVideosByModulo(mod) {
    return videos.filter((video) => { return parseInt(video.modulo) === parseInt(mod) });
};

function getModulos() {
    return modulos;
};

function getModuloByID(id) {
    return modulos.filter((modulo) => { return parseInt(modulo.id) === parseInt(id) });
};

function addVideo(id, videos) {
    $.each(videos, function (i, v) {
        let card = `<div class="col s12 m6">
                        <div class="card hoverable">
                            <div class="card-image waves-effect waves-block waves-light">
                                <div class="video-container">
                                    <iframe allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" src="${v.src}"
                                        scrolling="no" width="100%" height="360" frameborder="0"></iframe>
                                </div>
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">${v.titulo}
                                    <i class="fas fa-plus right"></i>
                                </span>
                                <p>
                                    <a href="#"></a>
                                </p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">${v.titulo}
                                    <i class="fas fa-times right"></i>
                                </span>
                                <p>${v.descricao}</p>
                            </div>
                        </div>
                    </div>`;

        $(id).append(card);
    });
}
