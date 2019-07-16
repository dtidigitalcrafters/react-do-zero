defaultParams = (x = 2, y = 2) => {
  console.log('x*y = ', x * y);
};

templateLiterals = () => {
  const firstName = 'Ramon';
  const lastName = 'Prata';
  const greeting = `Hello ${firstName} ${lastName}! Welcome back!`;
  console.log('greeting :', greeting);
};

multiLineStrings = () => {
  const multilineString = `Este é 
  um texto de 
  multiplas linhas`;
  console.log('multilineString :', multilineString);
};

blockScope = () => {
  var x = 10;
  {
    var x = 100;
  }
  {
    var x = 'This is a string even!';
  }

  console.log('x :', x);
  let y = 10;
  {
    let y = 100;
  }
  {
    let y = 'This is a string even!';
  }

  console.log('y :', y);
  console.log('anotherOne :', anotherOne);
};

arrayFilter = () => {
  const filtered = arrayTest.filter(item => item > 2);
  console.log('filtered :', filtered);
};

arrayMap = () => {
  const mapped = arrayTest.map(item => item * 2);
  console.log('mapped :', mapped);
};

arrayFind = () => {
  const element = arrayTest.find(item => item > 2);
  console.log('element :', element);
};

arrayIncludes = () => {
  const elementExists = arrayTest.includes(2);
  console.log('elementExists :', elementExists);
};

objectLiterals = (a = 'a1', b = 'b1') => {
  const myObject = { a, b };
  console.log('myObject :', myObject);
};

destructing = () => {
  const student = {
    firstName: 'Ramon',
    lastName: 'Prata',
    country: 'Brazil'
  };

  const { firstName, lastName, country } = student;
  console.log(firstName, lastName, country);
};

objectValues = () => {
  const countries = {
    BR: 'Brazil',
    DE: 'Germany',
    RO: 'Romania',
    US: 'United States of America'
  };
  const values = Object.values(countries);
  console.log('values :', values);
};

objectEntries = () => {
  const countries = {
    BR: 'Brazil',
    DE: 'Germany',
    RO: 'Romania',
    US: 'United States of America'
  };
  const values = Object.entries(countries);
  console.log('values :', values);
};

srpeadOperatorObjectCopy = () => {
  const objetoA = { a: 'a', b: 'b', c: 'c' };
  const objetoB = objetoA;

  const objetoC = { ...objetoA, b: 'b foi alterado' };
  console.log('objetoC :', objetoC);
  console.log('objetoA :', objetoA);

  objetoB.b = 'b foi alterado';
  console.log('objetoA :', objetoA);
};

srpeadOperatorArray = () => {
  console.log('array arrayTest :', [...arrayTest]);
  const arr2 = [6, 7, 8];
  arrayTest.push(...arr2);
  console.log(' spreaded  :', arrayTest);
};

promise = () => {
  const promise = new Promise((resolve, reject) => {
    let works = true;
    setTimeout(() => {
      console.log('Doing the first thing async...');
      works = false;
      if (!works) {
        resolve('Ok');
      } else {
        reject('Something went wrong');
      }
    }, 2000);
  })
    .then(() => {
      console.log('Doing something else...');
    })
    .catch(error => {
      console.log('error :', error);
    });
};

promiseAsynAwait = async () => {
  const myPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
  try {
    const responsePromise = await myPromise;
    console.log('responsePromise :', responsePromise);
  } catch (error) {
    console.log('error :', error);
  }
};