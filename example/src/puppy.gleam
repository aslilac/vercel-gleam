import gleam/bool
import gleam/string
import gleam/string_builder

pub type Puppy {
  Puppy(name: String, good: Bool, soft: Bool)
}

pub fn to_json(puppy: Puppy) -> String {
  string.concat([
    "{\"name\":\"",
    puppy.name,
    "\",\"good\":",
    string.lowercase(bool.to_string(puppy.good)),
    ",\"soft\":",
    string.lowercase(bool.to_string(puppy.soft)),
    "}",
  ])
}
