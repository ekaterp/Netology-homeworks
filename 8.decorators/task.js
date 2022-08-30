function cachingDecoratorNew(func) {
  const cache = {};
  return function (...arg) {
    const hash = arg.join(', ');
    let result = cache[hash];
    if (result === undefined) {
      if (Object.keys(cache).length === 5) {
       delete cache[Object.keys(cache)[0]];
      } 
      cache[hash] = result = func.call(this, ...arg);
      console.log('Вычисляем: ' + result);
      return 'Вычисляем: ' + result; 
    } else {
      console.log('Из кэша: ' + result);
      return 'Из кэша: ' + result;
    }
  }
}

function debounceDecoratorNew(f, ms) {
  let timerId = null;
  let wrapper;

  wrapper = function(...args) {
    wrapper.allCount++;

    if (timerId === null) {
      wrapper.count++;
      f.apply(this, args);
    } else {
      // Отменить предыдущий сигнал, если до этого уже был запланирован запуск в setTimeout.
      clearTimeout(timerId); 
    }

    // Запланировать следующий запуск, который может быть отменен при повторном вызове.
    timerId = setTimeout(() => {
      wrapper.count++;
      f.apply(this, args); 
    }, ms);
  };

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
};
