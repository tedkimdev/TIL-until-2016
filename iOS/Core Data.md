#Core Data


- Checking the Use Core Data box will cause Xcode

 to generate boilerplate code for what’s known as a Core Data stack in AppDelegate.swift.




- click *.xcdatamodeld  file and add an entity.

- add Person entity.




####1. Saving to Core Data
```swift
import CoreData
```

```swift
var people = [NSManagedObject]()
```

- NSManagedObject represents a single object stored in Core Data

```swift
person.valueForKey("name") as? String
```


##### save
```swift
func saveName(name: String) {

  //1
  let appDelegate = UIApplication.sharedApplication().delegate as! AppDelegate
 
  let managedContext = appDelegate.managedObjectContext
 
  //2
  let entity =  NSEntityDescription.entityForName("Person", inManagedObjectContext:managedContext)
 
  let person = NSManagedObject(entity: entity!, insertIntoManagedObjectContext: managedContext)
 
  //3
  person.setValue(name, forKey: "name")
 
  //4
  do {

    try managedContext.save()

  //5
    people.append(person)

  } catch let error as NSError  {

      print("Could not save \(error), \(error.userInfo)")

  }
}
```


####2. Fetching from Core Data
```
override func viewWillAppear(animated: Bool) {
  super.viewWillAppear(animated)
 
  //1
  let appDelegate = UIApplication.sharedApplication().delegate as! AppDelegate
 
  let managedContext = appDelegate.managedObjectContext
 
  //2
  let fetchRequest = NSFetchRequest(entityName: "Person")
 
  //3
  do {

    let results =

      try managedContext.executeFetchRequest(fetchRequest)

    people = results as! [NSManagedObject]

  } catch let error as NSError {

    print("Could not fetch \(error), \(error.userInfo)")

  }
}
````
