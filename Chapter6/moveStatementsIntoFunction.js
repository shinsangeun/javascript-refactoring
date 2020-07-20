// before
result.push('<p>제목: ${person.photo.title}');
result.concat(photoData(person.photo));


function photoData(aPhoto) {
    return[
        '<p>위치: ${aPhoto.location}</p>',
        '<p>날짜: ${aPhto.date.toDateString()}</p>'
    ];
}

//after
result.concat(photoData(person.photo));

function photoData(aPhoto) {
    return[
        '<p>제목 : ${aPhoto.title}</p>',
        '<p>위치: ${aPhoto.location}</p>',
        '<p>날짜: ${aPhto.date.toDateString()}</p>'
    ];
}