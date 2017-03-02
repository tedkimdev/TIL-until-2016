
import UIKit

import SnapKit
import ManualLayout

class SampleViewController: UIViewController {
    
    // MARK: Constants
    struct Metric {
        
        static let menubarViewHeight = CGFloat(60)
    }
    
    // MARK: Properties
    
    
    // MARK: UI
    
    fileprivate let collectionView: UICollectionView = UICollectionView(frame: .zero, collectionViewLayout: UICollectionViewFlowLayout())
    
    fileprivate lazy var menubarView: MenuBarView = {
        let uv = MenuBarView(frame: .zero)
        uv.backgroundColor = .red
        return uv
    }()
    
    // MARK: View Life Cycle
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        //이거 필수.. ㅠㅠ
        
        /*
         iOS 7 에서 xib 를 작성하고 NavigationController 를 통해 ViewController 에 들어갈때,
         
         스크롤 뷰 기반의 뷰들을 insert 했을때 네비게이션 바높이 만큼 inset 이생긴다. 일반적으로는 문제 될게 없지만,
         
         테이블 뷰를 스위칭 한다던지 할때 두번째 테이블 뷰에는 inset 이 자동으로 설정되지 않기 때문에 (...)
         
         스위칭시 문제가 발생할 수 있으므로 아래와 같이 처리하면 xib 에서 보이는 대로 그냥 짜면 된다.
         
         self.automaticallyAdjustsScrollViewInsets = false;
         
          -> collectionview 를 사용할때 navigation 만큼 inset 이 생기는 부분을 방지
        */
        self.automaticallyAdjustsScrollViewInsets = false
        
        self.collectionView.dataSource = self
        self.collectionView.delegate = self
        
        self.collectionView.register(UICollectionViewCell.self, forCellWithReuseIdentifier: "cell")
        self.view.addSubview(menubarView)
        self.view.addSubview(collectionView)
        
        self.menubarView.snp.makeConstraints { make in
            if let navigationBar = self.navigationController?.navigationBar {
                make.top.equalTo(navigationBar.bottom)
            }
            make.left.right.equalToSuperview()
            make.height.equalTo(Metric.menubarViewHeight)
        }
        
        self.collectionView.snp.makeConstraints { make in
            if let navigationBar = self.navigationController?.navigationBar {
                make.top.equalToSuperview().offset(
                    navigationBar.bottom +
                    Metric.menubarViewHeight
                )
            }
            make.left.right.bottom.equalToSuperview()
        }
        
    }
    
    // MARK: Actions
    
}


// MARK: - UICollectionViewDataSource

extension SampleViewController: UICollectionViewDataSource {
    
    public func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 5
    }
    
    public func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "cell", for: indexPath)
        
        cell.backgroundColor = .red
        
        return cell
    }
    
}


// MARK: - UICollectionViewDelegate

extension SampleViewController: UICollectionViewDelegate {
    
}


// MARK: - UICollectionViewDelegateFlowLayout

extension SampleViewController: UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        return CGSize(width: 10, height: 10)
    }
}






// MARK: - MenuBar

class MenuCell: UICollectionViewCell {
    
    struct Metric {
        static let imageViewTop = CGFloat(10)
        static let imageViewLeft = CGFloat(10)
        static let imageViewHeight = CGFloat(20)
        static let imageViewWidth = CGFloat(20)
    }
    
    fileprivate let imageView = UIImageView(frame: .zero)
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        
        imageView.backgroundColor = .purple
        
        self.contentView.addSubview(imageView)
        
        
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func layoutSubviews() {
        
        self.imageView.centerX = self.centerX
        self.imageView.centerY = self.centerY
        self.
        
    }
}

class MenuBarView: UIView {
    
    struct Metric {
        static let collectionViewInsetTop = CGFloat(-60)
    }
    
    // MARK: UI
    fileprivate let collectionView = UICollectionView(frame: .zero, collectionViewLayout: UICollectionViewFlowLayout())
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        
        self.collectionView.dataSource = self
        self.collectionView.delegate = self
        
        self.collectionView.backgroundColor = .yellow
        self.collectionView.register(MenuCell.self, forCellWithReuseIdentifier: "MenuCell")
        self.addSubview(collectionView)
        
        self.collectionView.snp.makeConstraints { make in
            make.edges.equalToSuperview()
        }
        
//        collectionView.contentInset = UIEdgeInsets(top: Metric.collectionViewInsetTop, left: 0, bottom: 0, right: 0)
        
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
}


// MARK: - UICollectionViewDataSource

extension MenuBarView: UICollectionViewDataSource {

    public func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "MenuCell", for: indexPath)
        
        cell.backgroundColor = .lightGray
        
        return cell
    }

    public func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 4
    }

    
}

// MARK: - UICollectionViewDelegate

extension MenuBarView: UICollectionViewDelegate {
    
}


// MARK: - UICollectionViewFlowLayout

extension MenuBarView: UICollectionViewDelegateFlowLayout {
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        return CGSize(width: 10, height: 10)
    }
}
