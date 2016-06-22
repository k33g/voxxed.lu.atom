# Demo Golo
module demo

struct Human = {
  name
}

function main = |args| {
  println("Hello Golo")

  let bob = DynamicObject(): nickName("Bobby")

  try {
    if(true) {
      println(42)
    }
  } catch (e) {
    println(null)
  }

}
