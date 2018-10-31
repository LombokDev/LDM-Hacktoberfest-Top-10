var socket = io.connect('http://localhost:5000');
socket.on('top-ten', (data) => {
  console.log(data)
  var content = makeTop10(data)
  $("#top10-lists").html(content)
})

function makeItem(nama, fotoPath, progress, detail) {
  var percentage = progress / 5 * 100
  return `<li class='media my-4'><img class='mr-3 rounded-circle' width='42' height='42' src='${fotoPath}' alt='Foto profile ${nama}'><div class='media-body'><h5 class='mt-0'><a href='https://hacktoberfest.digitalocean.com/stats/${detail}'>${nama}</a></h5><div class='progress'><div class='progress-bar bg-info' role='progressbar' aria-valuenow='${progress}' style='width: ${percentage}%' aria-valuemin='0' aria-valuemax='5'></div></div></div></li>`;
}

function makeTop10(data) {
  var mapped = data.map((item) => makeItem(item.nama, item.foto, item.progress, item.detail));
  return `<ul class='list-unstyled'>${mapped.join()}</ul>`
}