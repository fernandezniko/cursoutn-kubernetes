# Curso UTN Kubernetes
Server simple de ejemplo en node js para probar distintos deplyments en k8s.

## API Endpoint
| Metodo | Endpoint              | Descripcion   |
| ------ | --------------------- | ------------- |
| GET | / | Devuelve el string Hello World
| GET | /saludo | Devuele el string Hola!
| GET | /despedida | Devuelve el string Chau

## Actividad Inicial
### Intrucciones para probarlo
Clonar el repo y correr el comando:

```bash
kubectl apply -f deployment.yaml
```
Al no tener servicios de kubertenes implementados, se puede probar entrando a cada pod o haciendo un forwarding de los puertos.

Ejecutar el siguiente comando para obtener el nombre de los pods como la siguiente imagen

```bash
kubectl get pods
```
### Entrado a cada pod
```bash
kubectl exec -it <nombre-del-pod> -- /bin/sh
```

Al ser una imagen alpine y no contar con curl, podemos probar con wget o instalar curl 
```bash
wget -qO- http://localhost:3000
```
 
### Forwarding de puertos
```bash
kubectl port-forward <nombre-del-pod> 3000:3000
```

Luego podemos ingresar desde nuestro navegador
```bash
localhost:3000
```

## Actividad Final
### Intrucciones para probar NodePort
Clonar el repo y correr el comando:

```bash
kubectl apply -f nodePort-deployment.yaml
```

Para obtener el estado del servicio 
```bash
kubectl get svc utn-node-service
```

Ir a la siguiente url para ver localmente la app levantada: 

```bash
localhost:30000
```

### Intrucciones para probar LoadBalancer
Clonar el repo y correr el comando:

```bash
kubectl apply -f loadBalancer-deployment.yaml
```

Para obtener el estado del servicio 
```bash
kubectl get svc utn-node-loadbalancer
```

Ir a la siguiente url para ver localmente la app levantada ya que Docker Desktop expone los servicios a través del localhost: 

```bash
localhost:3000
```

Podemos ver los logs de cada pod para validar el correcto balance de la carga
```bash
kubectl get pods
```
```bash
kubectl logs <nombre-del-pod>
```

