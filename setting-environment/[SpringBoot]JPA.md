#SpringBoot JPA(Java Persistence API)

##Setting
http://blog.woniper.net/232

http://mudchobo.tistory.com/549

http://cpdev.tistory.com/25

###예

사용자 테이블, 주문 테이블 (1:다)

```java
public class User {
...
  @OneToMany(mmapedBy = "user", cascade = CascadeType.ALL)
  private List<Order> orders;

  public boolean addOrder(Order order) {
      if(orders == null)
          orders = new ArrayList<>();
      return this.orders.add(order);
  }
}

public class Order {
...
  @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  @JoinColumn(name = "user_id")
  private User user;
}
```

###TEST
```java
public class OneToManyAndManyToOneTest {
 
    @Autowired
    private EntityManagerFactory entityManagerFactory;
    private EntityManager entityManager;
 
    @Test
    public void oneToManyAndManyToOneTest() {
        Order order = new Order();
        order.setOrderName("test order");
        order.setPrice(10000);

        User user = new User();
        user.setUsername("aney");
        user.setNickName("00aney");
        user.setAddress("seoul");
 
        // relationship
        user.addOrder(order);
        order.setUser(user);
        entityManager.persist(user);
 
        Assert.assertEquals(user.getOrders().get(0).getOrderId(), order.getOrderId());
    }
 
    @Before
    public void setUp() throws Exception {
        entityManager = entityManagerFactory.createEntityManager();
        entityManager.getTransaction().begin();
    }
 
    @After
    public void after() {
        entityManager.getTransaction().commit();
        entityManager.close();
    }
 
}
```
