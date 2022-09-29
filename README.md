# seedmap
Generate canvas tiles using 2d noise from seed. Major/minor pass preserves primary detail quadrants cross-resolution.

### usage
* `seed` -- Starting value for recursive noise. Default is Math.random().
* `size` -- Dimension of canvases. Default is 64.
* `quantity` -- Number of canvases. Default is 1.

```javascript
import { seedmap } from "./seedmap.js";

// parameters
let seed = Math.random()
let size = 64;
let quantity = 2;
// run...
let res = seedmap(seed, size, quantity);
```
### response

```javascript
console.log(res)
{
  dat: {pos: 4800, neg: 6400, time: 24.0}
  map: [canvas, canvas],
  max: 64,
  min: 4,
  seed: 12345678,
}
```

![seedmap_02_32](https://user-images.githubusercontent.com/48163461/193112200-eaf5da88-c1fb-4605-aaa3-0781168854ca.png)
![seedmap_02_64](https://user-images.githubusercontent.com/48163461/193112204-0044ac70-874c-4c34-953f-2072c55191eb.png)
![seedmap_01_32](https://user-images.githubusercontent.com/48163461/193112273-2076e10e-ee1b-431c-94ac-557fb6f15a0f.png)
![seedmap_01_64](https://user-images.githubusercontent.com/48163461/193112279-472613d3-e010-4ac2-ad43-e1d0cdb86fad.png)


```mermaid
sequenceDiagram
  loop quantity for quadrants
    Major->>+Minor: seed
    Note over Major,Minor: composite
  end
```
