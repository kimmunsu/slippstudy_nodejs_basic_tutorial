step4_1 ���� ��Ե� non-blocking �� ���ؼ� �˾ƺ��Ҵ�.
���� ���� non-blocking �� ���� �����ϰ� �ڵ带 �ۼ��غ���.

�켱 server.js �� �����Ͽ� requestHandler ���� ���� response �� �ۼ��Ͽ� non-blocking ��Ÿ���� �ڵ带 �����ϱ� ���� �غ���.
requestHandler ���� response �� ���� �ٷ� �ٴ� �κп��� �츰 router �� �׳� ����ĥ �� ����.
router ������ requestHandler ���� �ٷ� �� ���� request �� ���Ͽ� 404 not found �� return ���ְ� �־����� �̸� return �� �ƴ϶� ���� response �� �ۼ��ϵ��� router �� ��������.
requestHandler ���� non-blocking ���� �Լ��� exec() �� ���Ͽ� ��� �۾��̶�� �ϴ� �۾��� �����ϵ��� ���ش�.

1. server.js �� �����Ͽ� route �Լ� ȣ������� response �� �Ѱ��ش�.
2. router.js �� �����Ͽ� 404 not found �� ���� response �� write ���ش�.
3. requestHandlers.js �� �����Ͽ� response write �� �ص��� ���ְ�, start �Լ����� exec() �Լ��� �̿��� ��� �۾��� ������� �Ѵ�.
4. step3_4 ���� ���������� /start �� ȣ���ϰ� �ٷ� �绡�� /upload �� ȣ��������.

��� ��� �۾��� ������ ã���� ���ϰھ ��... �׷�����.. �ϰ� �����ϰ� �Ѿ�� �ִ�.
�������� ��ô ��� �۾��� ������ �� �ֱ⸦ �ٶ��ϴ�.