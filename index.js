function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
    return 'Welcome, ' + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine, name) {
  for (var i = 0; i < katzDeliLine.length; i++) {
  if (i===0) {
    return name
    katzDeliLine.pop(name);
  } else {
    return "There is nobody waiting to be served!"
  }
  }
}

function currentLine(katzDeliLine, name) {
  while (0 < katzDeliLine) {
    return "The line is currently: " + katzDeliLine.length + name 
  } return "The line is currently empty."
}
