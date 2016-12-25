## MKMapView

- import MKMapView
- ViewController : MKMapViewDelegate 추가


```swift
//ViewController.swift
import UIKit
import MapKit

class ViewController: UIViewController, MKMapViewDelegate {

    @IBOutlet weak var map: MKMapView!

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.

        let latitude: CLLocationDegrees = 27.1

        let longitude: CLLocationDegrees = 78.0

        let latDelta: CLLocationDegrees = 0.05

        let lonDelta: CLLocationDegrees = 0.05

        let span: MKCoordinateSpan = MKCoordinateSpan(latitudeDelta: latDelta, longitudeDelta: lonDelta)

        let location: CLLocationCoordinate2D = CLLocationCoordinate2D(latitude: latitude, longitude: longitude)

        let region: MKCoordinateRegion = MKCoordinateRegion(center: location, span: span)

        map.setRegion(region, animated: true)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}

```

##Adding User Annotations To Maps
```swift
//in ViewController
...

    override func viewDidLoad() {
        super.viewDidLoad()

        //...

        let uilpgr = UILongPressGestureRecognizer(target: self, action:#selector(ViewController.longpress(gestureRecognizer:)))

        uilpgr.minimumPressDuration = 2

        map.addGestureRecognizer(uilpgr)
    }

    func longpress(gestureRecognizer: UIGestureRecognizer) {

        let touchPoint = gestureRecognizer.location(in: self.map)

        let coordinate = map.convert(touchPoint, toCoordinateFrom: self.map)

        let annotation = MKPointAnnotation()

        annotation.coordinate = coordinate

        annotation.title = "New Place"

        annotation.subtitle = "May I'll go here too..."

        map.addAnnotation(annotation)
    }

```

## User's location

- build phases > link binary with libraries 에 CoreLocation.framework 추가
- plist 수정
  - key : NSLocationWhileInUseUsageDescription,
          Privacy - Location When In Use Usage Description,
          Privacy - Location Always Usage Description
  - type : String
  - value : message (ex: Because I want to know where you are!)

- simulator debug location 에서 커스텀 위치 설정 가능

## 소스 추가 필요
