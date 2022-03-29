import * as THREE from 'three'

// 주제: 기본 장면

export function example() {
  const canvas = document.querySelector('#three-canvas')
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)

  // Scene
  const scene = new THREE.Scene()
  scene.fog = new THREE.Fog('black', 3, 7)
  
  // Camera
  const camera = new THREE.PerspectiveCamera(
    75, // 시야각(field of view)
    window.innerWidth / window.innerHeight, // 종횡비(aspect)
    0.1, // near
    1000, // far
  )
  camera.position.y = 2
  camera.position.z = 5
  
  // camera.lookAt(0, 0, 0)
  // camera.zoom = 0.5
  // camera.updateProjectionMatrix() // camera zoom 속성 바꿨으면 호출 해 줘야 함
  scene.add(camera)

  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.x = 1
  light.position.y = 3
  light.position.z = 5
  scene.add(light)

  // Mesh
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshStandardMaterial({
    // color: 0xff0000
    // color: '#ff0000'
    color: 'red'
  })

  const meshes = []
  let mesh
  for (let i = 0 ; i < 10 ; i++) {
    mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = Math.random() * 5 - 2.5
    mesh.position.z = Math.random() * 5 - 2.5
    scene.add(mesh)
    meshes.push(mesh)
  }
  
  scene.add(mesh)

  // 그리기
  const clock = new THREE.Clock()

  function draw() {
    // const time = clock.getElapsedTime()
    const delta = clock.getDelta()
    
    // 각도는 Radian 을 사용
    // 360도는 2파이

    meshes.forEach(item => {
      item.rotation.y += delta
    })


    renderer.render(scene, camera)
    
    // requestAnimationFrame(draw)
    renderer.setAnimationLoop(draw) // requestAnimationFrame 대신 쓸 수 있음. webXR 등에서는 무조건 setAnimationLoop 로 써야 함
  }

  function setSize() {
    // 카메라
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.render(scene, camera)
  }

  // 이벤트
  window.addEventListener('resize', setSize)
  draw()
}
