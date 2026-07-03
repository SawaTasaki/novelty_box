export const UsageGuide = () => {
  return (
    <div className="mt-6 border rounded-lg p-4 bg-white text-sm text-gray-800">
      <div className="font-semibold mb-3 text-base">
        サービス使い方ガイド
      </div>

      <ol className="list-decimal pl-5 space-y-3">
        <li>
          https://qr.quel.jp/text.php を開き、
          <br />
          <span className="font-medium">
            1〜20までの好きな数字
          </span>
          （1・3・7以外がおすすめ）を入力し、
          「作成する」ボタンを押してQRコードを作成します。
        </li>

        <li>
          アプリ画面右下の「QR」ボタンでカメラを起動します。
          <br />
          （ブラウザの設定でカメラを許可してください）
        </li>

        <li>
          QRコードを読み込むと、
          ①で設定した数字に対応するPDFノベルティが
          一覧へ追加されます。
        </li>

        <li>
          ノベルティアイコンをタップすると、
          PDFノベルティを閲覧できます。
        </li>
      </ol>
    </div>
  );
};
