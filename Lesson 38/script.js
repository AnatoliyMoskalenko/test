let json = '{"id":2}'

try{
    let user = JSON.parse(json);
    console.log(user);

    if (!user.name) {
        throw new Error("В этих данных нет имени!");
    }
} catch(error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`Get the error: ${error.name}`);
} finally {
    console.log('Я выполнюсь всегда!');
}

console.log('А я буду выполняться!');
