class ElectricStuff {
  constructor(name, power)
  {
    this.name = name;
    this.power = power;
    this.enabled = false;
  }
  
  isOn()
  {
    console.log(this.name + ' is ON.');
    this.enabled = true;
  }
  
  getPower()
  {
    return this.enabled ? this.power : 0;
  }
}

const microwave = new ElectricStuff('microwave', 1300)
const hairdryer = new ElectricStuff('hairdryer', 269)
const kettle = new ElectricStuff('kettle', 180)
const laptop = new ElectricStuff('laptop', 70)

console.log(microwave.getPower() + hairdryer.getPower() + kettle.getPower() + laptop.getPower())

microwave.isOn();
console.log(microwave.getPower() + hairdryer.getPower() + kettle.getPower() + laptop.getPower())

hairdryer.isOn();
console.log(microwave.getPower() + hairdryer.getPower() + kettle.getPower() + laptop.getPower())

kettle.isOn();
console.log(microwave.getPower() + hairdryer.getPower() + kettle.getPower() + laptop.getPower())

laptop.isOn();
console.log(microwave.getPower() + hairdryer.getPower() + kettle.getPower() + laptop.getPower())